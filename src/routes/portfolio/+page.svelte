<script>
  import { Content, Grid, Row, Column, TextInput, NumberInput, Form, Button, DataTable, Link } from 'carbon-components-svelte';

  export let data;

  let name;

  let deposit = 0;

  async function submitForm(e) {
    const options = {
      method: 'POST',
      headers: {
            'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, deposit })
    };

    const response = await fetch('http://127.0.0.1:8080/api/portfolio', options);

    const data = await response.json();

    console.log(data);
  }
</script>

<Content>
  <Grid>
    <Row>
      <Column>
        <Form on:submit={submitForm}>
          <TextInput labelText="Name" bind:value={name} />
          <NumberInput label="Deposit" bind:value={deposit} />
          <Button type="submit">Submit</Button>
        </Form>
      </Column>
    </Row>
    <Row>
      <Column>
        <DataTable
          headers={[
            { key: "name", value: "Name" },
            { key: "deposit", value: "Deposit" },
            { key: "link", value: "Link" },
          ]}
          rows={data.portfolios.map(portfolio => ({
            name: portfolio.name,
            deposit: portfolio.deposit,
            link: `/portfolio/${portfolio.id}`
          }))}
        >
          <svelte:fragment slot="cell" let:row let:cell>
            {#if cell.key === "link"}
              <Link href={cell.value}>
                Link
              </Link
              >
            {:else}
              {cell.value}
            {/if}
          </svelte:fragment>
        </DataTable>
      </Column>
    </Row>
  </Grid>
</Content>
