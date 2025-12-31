const { Router } = require('express');
const router = Router();

const mockNudges = [
  {
    id: 'nudge_1',
    title: 'Maya needs a visual warm-up',
    description: 'Start Algebra Foundations with a 5-minute fraction tiles demo to reduce errors.',
    type: 'risk',
    generated_at: new Date().toISOString()
  },
  {
    id: 'nudge_2',
    title: 'Physics group pacing',
    description: 'Group B is 1.5 sessions behind—consider swapping in async mini-labs.',
    type: 'info',
    generated_at: new Date().toISOString()
  }
];

router.get('/', (req, res) => {
  res.json({ status: 'success', data: mockNudges });
});

module.exports = router;
