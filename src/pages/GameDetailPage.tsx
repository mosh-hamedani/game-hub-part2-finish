import { Heading, Spinner, Text } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  )
}

export default GameDetailPage