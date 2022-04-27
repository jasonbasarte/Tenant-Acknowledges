import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tenant-confirmation',
  templateUrl: './tenant-confirmation.component.html',
  styleUrls: ['./tenant-confirmation.component.css']
})
export class TenantConfirmationComponent {

  constructor(public dialog: MatDialog) { }

  openTenantConfirmation() {
    const dialogRef = this.dialog.open(TenantDialogComponent, {
      height: '800px',
      width: '772px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openInspectionCalendar() {
    const dialogRef = this.dialog.open(InspectionDialog, {
      height: '900px',
      width: '772px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


// Tenant COnfirmation
@Component({
  selector: 'tenant-dialog.component',
  templateUrl: './tenant-dialog.component.html',
  styleUrls: ['./tenant-confirmation.component.css']
})
export class TenantDialogComponent {
  tenantPanelOpenState = false;
}



// Inspection Calendar
@Component({
  selector: 'inspection-calendar.component',
  templateUrl: './inspection-calendar.component.html',
  styleUrls: ['./tenant-confirmation.component.css']
})

export class InspectionDialog {
  inspectionPanelOpenState = false;
  inspectionPanelOpenState2 = false;
}