const express = require('express');
const bcrypt = require('bcryptjs');
const prisma = require('../../config/prismaConnection');

const adminRegister = async (req, res) => {
    const { username, password, cpf, nome, nivelPermissao = 'moderador'} = req.body;

    try {
        const existingUser = await prisma.usuario.findUnique({
            where: { username },
        });
        
        if (existingUser) {
            return res.status(400).json({ error: 'Nome de usuário já existe' });
        }

        const existingCpf = await prisma.usuario.findUnique({
            where: { cpf },
        });

        if (existingCpf) {
            return res.status(400).json({ error: 'CPF já registrado' });
        }

        if (password.length < 6) {
            return res.status(400).json({ error: 'A senha deve ter pelo menos 6 caracteres' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await prisma.usuario.create({
            data: {
                username,
                passwordHash,
                cpf,
                nome,
                nivelPermissao
            },
        });

        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
    }
};

module.exports = { adminRegister };