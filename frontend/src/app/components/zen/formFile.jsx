import React, { useState } from 'react'
import { DropzoneArea, DropzoneAreaBase } from 'material-ui-dropzone'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { isNull } from 'lodash'
import MatxProgressBar from 'app/components/MatxProgressBar/MatxProgressBar'
import { Grid } from '@material-ui/core'

export default function FormFile(props) {
    const { onUpload, onSupprimer, titre, progress } = props

    const useStyles = makeStyles((theme) =>
        createStyles({
            previewChip: {
                minWidth: 160,
                maxWidth: 210,
            },
            height: '20%',
        })
    )

    const classes = useStyles()
    const supression = (file) => {}

    return (
        <>
            <DropzoneArea
                {...props}
                style={{ width: '100%', height: '10%' }}
                maxFileSize={20971520000}
                showPreviews={false}
                //acceptedFiles={['image/*']}
                filesLimit={1}
                showFileNamesInPreview={true}
                showFileNames={true}
                dropzoneText={
                    titre ??
                    'Faire glisser le fichier ou clickez ici pour charger'
                }
                showPreviewsInDropzone={true}
                getFileAddedMessage={(fichier) =>
                    'Fichier ' + fichier + ' ajouté avec succès'
                }
                getFileRemovedMessage={(fichier) =>
                    'Fichier ' + fichier + ' supprimé avec succès'
                }
                getDropRejectMessage={(
                    rejectedFile,
                    acceptedFiles,
                    maxFileSize
                ) => {
                    let message = `le fichier ${rejectedFile.name} a été rejété. `
                    if (!acceptedFiles.includes(rejectedFile.type)) {
                        message += 'Type de fichier non supporté'
                    }
                    if (rejectedFile.size > maxFileSize) {
                        message += 'Fichier trop volumineux.'
                    }
                    return message
                }}
                // useChipsForPreview
                previewGridProps={{
                    container: { spacing: 1, direction: 'row' },
                }}
                previewChipProps={{ classes: { root: classes.previewChip } }}
                previewText="Fichier sélectionné:"
                onChange={(files) => onUpload(files[0] ?? null)}
                onDelete={onSupprimer}
                //inputProps={{type:'file', name:'fichier'}}
                // onAdd={(files) => console.log('Added Files:', files[0].data)}
                //onSave={(event)=> onSelection( event.target.files[0]?? null)}
            />
            <Grid className ="mt-3">
                <MatxProgressBar value={progress}></MatxProgressBar>
                {progress}%
            </Grid>
        </>
    )
}
