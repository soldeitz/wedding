export function download_csv(csv: BlobPart[], filename: string) {
  const csvFile = new Blob(csv, {type: "text/csv"});
  const downloadLink = document.createElement("a");

  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);

  downloadLink.click();
}

export function export_table_to_csv(htmlTable: HTMLElement, filename: string) {
  const csv = Array<string>();
  const rows = htmlTable.querySelectorAll("table tr");

  for (let i = 0; i < rows.length; i++) {
    const row = []; 
    const cols = rows[i].querySelectorAll("td, th");
    for (let j = 0; j < cols.length; j++) {
      row.push(cols[j].textContent);
    }
      
    csv.push(row.join(";"));		
  }
  const csvData = csv.join("\n");

  download_csv([csvData], filename);
}