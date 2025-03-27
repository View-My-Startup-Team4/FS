
const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Express Server!');
});

// ✅ 모든 고객 가져오기
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await prisma.customer.findMany();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 모든 기업 가져오기
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await prisma.company.findMany();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 모든 투자 가져오기
app.get('/api/invests', async (req, res) => {
  try {
    const invests = await prisma.invest.findMany();
    res.json(invests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 특정 고객 가져오기
app.get('/api/customers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await prisma.customer.findUnique({ where: { id } });
    res.json(customer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 특정 기업 가져오기
app.get('/api/companies/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const company = await prisma.company.findUnique({ where: { id } });
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 특정 투자 가져오기
app.get('/api/invests/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const invest = await prisma.invest.findUnique({ where: { id } });
    res.json(invest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 새로운 고객 추가
app.post('/api/customers', async (req, res) => {
  const { id, password, username } = req.body;
  try {
    const newCustomer = await prisma.customer.create({
      data: { id, password, username },
    });
    res.json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ 서버 실행
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
