const express =require('express');

import express from'express';

const app =express();

const porta = 3333;
app.listen(porta,()=>{
    console.log(`servidor iniciado na porta ${porta}`);
});
