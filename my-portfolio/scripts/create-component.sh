#!/bin/bash

read -p "Enter the name of your component(s), separated by spaces: " componentNames

# Split the input into an array
IFS=' ' read -ra componentArray <<< "$componentNames"

for componentName in "${componentArray[@]}"; do
    # Create a folder for each component
    mkdir -p "$componentName"

    # Create ComponentName.module.scss file
    echo -e ".${componentName} {\n}" > "$componentName/$componentName.module.scss"

    # Create ComponentName.tsx file
    echo -e "import styles from './${componentName}.module.scss';\n\nfunction ${componentName}() {\n  return (\n    <div className={styles.${componentName}}>\n      ${componentName}\n    </div>\n  );\n}\n\nexport default ${componentName};" > "$componentName/$componentName.tsx"

    echo "Component '$componentName' created successfully!"
done
