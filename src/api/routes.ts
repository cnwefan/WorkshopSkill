import { Router } from 'express';
import { mockDb } from '../db/mockDb.ts';

const router = Router();

router.get('/workshops', (req, res) => {
  res.json(mockDb.getWorkshops());
});

router.get('/employees/:id', (req, res) => {
  const employee = mockDb.getEmployee(req.params.id);
  if (!employee) return res.status(404).json({ error: 'User not found' });
  res.json(employee);
});

router.post('/mes/clock-in', (req, res) => {
  const { employeeId, stationId, planItemId } = req.body;
  res.json({ status: 'CLOCKED_IN', timestamp: new Date().toISOString() });
});

export default router;
