import { initialize } from 'zokrates-js';

function importResolver(location, path) {
  // implement your resolving logic here
  return { 
    source: "def main(field owner, field id) -> (field): field result = owner * id return result", 
    location: path 
  };
}

initialize().then((zokratesProvider) => {
    // we have to initialize the wasm module before calling api functions
    var compilevar =  zokratesProvider.compile("def main(private field a) -> (field): return a", "main", importResolver);
    var setupvar = zokratesProvider.setup(compilevar.program);
    var witness = zokratesProvider.computeWitness(artifacts,args);
    var exportVerifier = zokratesProvider.exportSolidityVerifier(setupvar.vk , isAbiv2);
    var generatep = zokratesProvider.generateProof(compilevar.program , witness, setupvar.pk);
        
});
