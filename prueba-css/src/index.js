
var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <header>
    <img src="./src/assets/logo.svg" height="38" width="125" alt="ancert" class="logo" />
    <h1>Unique Element Challenge</h1>
  </header>
  <main>
    <div class="slot slot-description">
      <section>
        <h2>Target</h2>
        <p>
          Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.
        </p>
      </section>
      <section>
        <h2>Considerations</h2>
        <ul>
          <li>Values are duplicated only twice.</li>
          <li>There is only one non duplicate value.</li>
          <li>The non duplicate value can be placed anywhere on the array.</li>
          <li>The result must be an integer.</li>
        </ul>
      </section>
    </div>
    <div class="slot slot-data">
      <section class="test">
        <h2>Test Data</h2>
        <p>${arrayTest}</p>
      </section>
      <div class="row">
        <section class="expected">
          <h2>Expected result</h2>
          <p>4</p>
        </section>
        <section class="result">
          <h2>Your Result</h2>
          <p>4</p>
        </section>
      </div>
    </div>
  </main>
`;
