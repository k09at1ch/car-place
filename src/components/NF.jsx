import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function NF() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return null;
}

export default NF;
