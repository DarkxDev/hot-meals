const submitComment = async (appId, itemId, username, comment) => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const url = `${baseURL}/apps/${appId}/comments`;
  const requestBody = { item_id: itemId, username, comment };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit comment, received ${response.status}`);
  }
};

export default submitComment;