function setApiVersion(apiVersion: string) {
  return (constructor: any) => {
    return class extends constructor {
      version = apiVersion;
    };
  };
}

@setApiVersion("1.0.0")
class API {}
console.log(new API());
