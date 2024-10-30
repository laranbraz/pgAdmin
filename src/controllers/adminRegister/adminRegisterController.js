const express = require('express');
const bcrypt = require('bcryptjs');
const prisma = require('../../config/prismaConnection');

const adminRegister = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verifique se o usuário já existe
        const existingUser = await prisma.usuario.findUnique({
            where: { username },
        });
        if (existingUser) {
            return res.status(400).json({ error: 'Nome de usuário já existe' });
        }

        // Hash da senha
        const passwordHash = await bcrypt.hash(password, 10);

        // Criação do novo usuário
        const newUser = await prisma.usuario.create({
            data: {
                username,
                passwordHash,
            },
        });

        res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário', details: error.message });
    }
};

module.exports = { adminRegister };