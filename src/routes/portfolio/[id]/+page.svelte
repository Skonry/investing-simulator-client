<script>
  import { Content, Grid, Row, Column, DataTable, Link, Button } from 'carbon-components-svelte';

  export let data;

  async function handleDelete(link) {
    e.preventDefault();

    const options = {
      method: 'DELETE',
      headers: {
            'Content-Type': 'application/json'
      }
    };

    const response = await fetch(link, options);

    const data = await response.json();

    console.log(data);
  }
</script>

<Content>
  <Grid>
    <Row>
      <Column>
        {data.portfolio.name}
      </Column>
    </Row>
    <Row>
      <Column>
        <DataTable
          headers={[
            { key: "name", value: "Name" },
            { key: "delete", value: "Delete" }
          ]}
          rows={data.portfolio.portfolioInstruments.map(portfolioInstrument => ({
            id: portfolioInstrument.id,
            delete: `http://127.0.0.1:8080/api/portfolio/${data.portfolio.id}/instruments/${portfolioInstrument.id}`
          }))}
        >
          <svelte:fragment slot="cell" let:row let:cell>
            {#if cell.key === "delete"}
              <Button on:click={() => handleDelete(cell.value)}>Delete</Button>
            {:else}
              {cell.value}
            {/if}
          </svelte:fragment>
        </DataTable>
      </Column>
    </Row>
  </Grid>
</Content>