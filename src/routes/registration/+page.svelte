<script>
  import { Content, Grid, Row, Column, Form, TextInput, PasswordInput, Button } from 'carbon-components-svelte';

  let email;

  let password;

  async function submitForm(e) {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    };

    const response = await fetch('http://127.0.0.1:8080/api/user/register', options);

    const data = await response.json();

    console.log(data);
  }
</script>

<Content>
  <Grid>
    <Row>
      <Column>
        <Form on:submit={submitForm}>
          <TextInput labelText="Email" bind:value={email} />
          <PasswordInput labelText="Password" bind:value={password} />
          <Button type="submit">Submit</Button>
        </Form>
      </Column>
    </Row>
  </Grid>
</Content>
