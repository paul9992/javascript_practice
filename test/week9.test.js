const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("returns sum of numbers which are multiples of 3 and 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([5, 9, 7, 8, 6, 10])).toBe(30);
  });

  test("if no such numbers found in the array, returns 0", () => {
    expect(sumMultiples([4, 22, 1])).toBe(0);
  });
});



describe("isValidDNA", () => {
  test("returns true for a string containing all CGTA", () => {
    expect(isValidDNA("GCTA")).toBe(true);
    expect(isValidDNA("AGCTATCAG")).toBe(true);
  });

  test("returns false for a string containing one char other than CGTA", () => {
    expect(isValidDNA("GSCTA")).toBe(false);
    expect(isValidDNA("AGCTATCAG5")).toBe(false);
  });

  test("returns false for a string containing all char other than CGTA", () => {
    expect(isValidDNA("z4R")).toBe(false);
    expect(isValidDNA("2-OPsW*")).toBe(false);
  });
});



describe("getComplementaryDNA", () => {
  test("returns complementary string containing all CGTA", () => {
    expect(getComplementaryDNA("GCTA")).toBe("CGAT");
    expect(getComplementaryDNA("AGCTATCAG")).toBe("TCGATAGTC");
  });

  /* for error throw - need to pass a function to expect */
  test("returns error if not DNA string", () => {
    expect(() => {getComplementaryDNA("GYTA");}).toThrow("string is not valid DNA");
  });
});


