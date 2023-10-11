import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function NF() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, [navigate, useEffect]);

  return null;
}

export default NF;
