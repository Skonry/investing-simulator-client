<script>
  import { Content, Grid, Row, Column, DataTable } from 'carbon-components-svelte';

  export let data;
</script>

<Content>
  <Grid>
    <Row>
      <Column>
        <DataTable
          headers={[
            { key: "name", value: "Name" },
            { key: "issuer", value: "Issuer" },
            { key: "underlyingIndex", value: "Underlying Index" },
            { key: "dateOfFirstQuotation", value: "Date of first quotation"},
            { key: "dateOfLastQuotation", value: "Date of last quotation"}
          ]}
          rows={data.instruments.content}
        />
      </Column>
    </Row>
  </Grid>
</Content>
