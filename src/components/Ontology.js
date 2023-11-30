import React from 'react';

const IsCapitalized = (string) => {
  let first_letter = string[0];
  return first_letter == first_letter.toUpperCase()
}

const GetPrefix = (string) => {
  if (!string) {
    return false
  }

  let splited_string = string.split(":");
  if (splited_string.length == 2) {
    return splited_string[0]
  } else {
    return null
  }
}

const LinkClassOrProperty = (context, value) => {
  const linking_contexts = ["rdfs:domain", "rdfs:range", "pq", "rdfs:subClassOf"];
  const allowed_prefix = ["mov", null];

  if (linking_contexts.includes(context) && allowed_prefix.includes(GetPrefix(value))) {
    if (IsCapitalized(value)) {
      return <a href={"/doc/Ontologie/Classes/" + value }>{value}</a>
    } else {
      return <a href={"/doc/Ontologie/Propriétés/" + value }>{value}</a>
    }
  } else {
    return value
  }
}

async function getPropertyId(label) {
    const response = await fetch(`https://movies-test.abes.fr/w/api.php?action=wbsearchentities&search=${label}&language=fr&type=property&format=json`);
    const json = await response.json();
    return json["search"].shift()?.id
}

async function getItemId(label) {
    const response = await fetch(`https://movies-test.abes.fr/w/api.php?action=wbsearchentities&search=${label}&language=fr&format=json`);
    const json = await response.json();
    return json["search"].shift()?.id
}

const FormatQualifier = (context, value) => {
  const format_contexts = ["pq"];

  if (!value) {
    return value
  }

  if (format_contexts.includes(context)) {
    return <>{" "}<code>{value}</code></>
  } else {
    return value
  }
}

export const OntologyTable = ({ frontMatter }) => (
  <table>
    <thead>
      <tr>
        {
          Object.keys(frontMatter["owl"])
          .map((keys) =>
            <th>
              {keys}
            </th>
          )}
        <th>
          ID
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {Object.entries(frontMatter["owl"])
          .map(([key, value]) => {
            return <td>
              {
                [value].flat().map(value => {
                  return FormatQualifier(key, LinkClassOrProperty(key, value))
                })
              }
            </td>
          }
          )}
        <td>
          {
            await getPropertyId(frontMatter["owl"]?["rdfs:label"]?.replace("@fr", "")) || await getItemId(frontMatter["owl"]?["rdfs:label"]?.replace("@fr", ""))
          }
        </td>
      </tr>
    </tbody>
  </table>
);
