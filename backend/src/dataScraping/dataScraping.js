async function fetch_demo()
{
	const resp = await fetch('https://api.data.gov.hk/v1/historical-archive/get-file?url=https%3A%2F%2Fwww.lcsd.gov.hk%2Fdatagovhk%2Fevent%2Fvenues.xml&time=20221210-1315');

	console.log(await resp.json());
}

fetch_demo();